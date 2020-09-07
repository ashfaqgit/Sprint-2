package com.cg.diagnostic.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cg.diagnostic.entity.DiagnosisTest;

@Repository
public interface DiagnosisTestDao extends JpaRepository<DiagnosisTest,String> {

	@Query("from DiagnosisTest d where d.diagnosisCentre.centreId=:cid")
	public List<DiagnosisTest> getTest(@Param("cid") String centreId);
}
