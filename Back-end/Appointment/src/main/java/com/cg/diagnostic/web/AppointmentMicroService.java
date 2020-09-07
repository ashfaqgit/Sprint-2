package com.cg.diagnostic.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.cg.diagnostic.dto.AppointmentMessage;
import com.cg.diagnostic.entity.Appointment;
import com.cg.diagnostic.exceptions.AppointmentException;
import com.cg.diagnostic.service.AppointmentService;
import com.cg.diagnostic.util.SlotConstants;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class AppointmentMicroService {
	@Autowired
	private AppointmentService service;
	
	@GetMapping(SlotConstants.VIEW_APMT_URL)
	public List<Appointment> getAppointment(@PathVariable("slotid") String slotId) throws AppointmentException{
		
		return service.getAppointments(slotId);
	}
	
	@GetMapping(SlotConstants.BOOK_APPOINTMENT_URL)
	public AppointmentMessage bookAppointment(@PathVariable("slotid") String slotId, @PathVariable("userid") String userId) throws AppointmentException{
		String msg=service.bookAppointment(slotId, userId);
		return new AppointmentMessage(msg);
	}
	
}
