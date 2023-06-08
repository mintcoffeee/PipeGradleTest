package com.example.demo;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
	
	// @GetMapping("/")
	// public String index() {
	// 	return "Hello";
	// }
	
	@GetMapping("/hello")
	public List<String> hello() {
		return Arrays.asList("안녕하세요" , "hello");
	}
	
	@GetMapping("/list")
	public List<Map<String, String>> home(){
//		List<Map<String, String>> list = new Vector<>();
		List<Map<String, String>> list = new ArrayList<Map<String, String>>();
		
		Map<String, String> m1 = new HashMap<>();
		m1.put("name", "neo");
		m1.put("addr", "gangnam");
		m1.put("age", "33");
		list.add(m1);
		
		Map<String, String> m2 = new HashMap<>();
		m2.put("name", "prodo");
		m2.put("addr", "jongro");
		m2.put("age", "35");
		list.add(m2);
		
		return list;
	}
	
	
}
