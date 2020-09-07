package com.cg.diagnostic.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.diagnostic.entity.User;

@Repository
public interface UserDao extends JpaRepository<User, String> {

}
