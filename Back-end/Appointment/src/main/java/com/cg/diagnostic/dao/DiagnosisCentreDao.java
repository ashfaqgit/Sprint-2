package com.cg.diagnostic.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.diagnostic.entity.DiagnosisCentre;


@Repository
public interface DiagnosisCentreDao extends JpaRepository<DiagnosisCentre,String> {

}
