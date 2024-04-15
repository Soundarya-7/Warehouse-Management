package com.bosch.whm;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

import com.bosch.whm.model.*;

public class UserTest {
	@Test 
	public void testUser() {
		int id = 1;
		String name = "testname";
		String password = "password123";
		String mobileNumber = "1122334455";
		String email = "testname@gmail.com";
		Users user = new Users(id, name, email, password, mobileNumber, UserType.ADMIN ,UserStatus.ACCEPTED);
		
		assertEquals(id, user.getEmpId());
		assertEquals(name, user.getName());
		assertEquals(password, user.getPassword());
		assertEquals(mobileNumber, user.getMobileNumber());
		assertEquals(email, user.getEmail());
		assertEquals(UserType.ADMIN, user.getUserType());
		assertEquals(UserStatus.ACCEPTED, user.getUserStatus());
}
}
