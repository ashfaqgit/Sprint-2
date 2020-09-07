package com.cg.diagnostic.service;

import java.util.List;

import org.apache.catalina.User;
import org.aspectj.weaver.ast.Test;

import com.cg.diagnostic.dto.AppointmentDto;
import com.cg.diagnostic.entity.Appointment;
//import com.cg.diagnostic.exceptions.AppointmentException;
import com.cg.diagnostic.entity.DiagnosisCentre;
import com.cg.diagnostic.exceptions.AppointmentException;


public interface AppointmentService
{
	
	public List<Appointment>  getAppointments(String slotId)throws AppointmentException;
	
  
	public String bookAppointment(String slotId,String userId)throws AppointmentException;
	
	
	
}
	



