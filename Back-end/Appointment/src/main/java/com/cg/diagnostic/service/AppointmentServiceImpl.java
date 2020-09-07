
  package com.cg.diagnostic.service;
  
  import java.util.List; import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.diagnostic.dao.AppointmentDao;
import com.cg.diagnostic.dao.CheckUpSlotDao;
import com.cg.diagnostic.dao.UserDao;
import com.cg.diagnostic.entity.Appointment;
import com.cg.diagnostic.entity.CheckUpSlot;
import com.cg.diagnostic.entity.User;
import com.cg.diagnostic.exceptions.AppointmentException;
import com.cg.diagnostic.util.SlotConstants;
  
 
  @Transactional
  @Service 
  public class AppointmentServiceImpl implements AppointmentService {
	 
	  @Autowired
	  private AppointmentDao appointDao;
	  
	  @Autowired
	  private UserDao userDao;
	  
	  @Autowired
	  private CheckUpSlotDao slotDao;

	@Override
	public List<Appointment> getAppointments(String slotId) throws AppointmentException {
		List<Appointment>  applist = appointDao.getAppointments(slotId);
		if(applist.isEmpty())
			throw new AppointmentException(SlotConstants.NO_APPOINTMENT_FOUND);
		applist.sort((a1,a2)->a1.getPatientName().compareTo(a2.getPatientName()));
 		return applist;
	}

	@Override
	public String bookAppointment(String slotId, String userId) throws AppointmentException {
		
		Optional<User> optUser=userDao.findById(userId);
		if(!optUser.isPresent())
			throw new AppointmentException(SlotConstants.USER_NOT_FOUND);
		Optional<CheckUpSlot> optSlot=slotDao.findById(slotId);
		if(!optSlot.isPresent())
			throw new AppointmentException(SlotConstants.SLOT_NOT_AVAILABLE);
		
		User user=optUser.get();
		CheckUpSlot slot=optSlot.get();
		if(slot.getNumOfApp()<SlotConstants.NOT_AVAILABLE)
			throw new AppointmentException(SlotConstants.NO_APPOINTMENT);
		
		Appointment apmt=new Appointment();
		String apmtId=slot.getTestSlotId() + user.getUserID();
		apmt.setApmtId(apmtId);
		apmt.setPatientName(user.getUserName());
		apmt.setUserContactNum(Long.parseLong(user.getUserID()));
		apmt.setSlot(slot);
		appointDao.save(apmt);
		slot.setNumOfApp(slot.getNumOfApp()-SlotConstants.INCREMENT);
		slotDao.save(slot);
		return SlotConstants.APPOINTMENT_CREATED+apmtId;
	}
  }
  
  
  