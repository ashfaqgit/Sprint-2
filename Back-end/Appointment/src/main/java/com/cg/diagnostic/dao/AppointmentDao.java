package com.cg.diagnostic.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cg.diagnostic.entity.Appointment;

@Repository
public interface AppointmentDao extends JpaRepository<Appointment, String>
{
	@Query("from Appointment a where a.slot.testSlotId=:slotId")
	public List<Appointment> getAppointments(@Param("slotId") String testSlotId);
	

}
