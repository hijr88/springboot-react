package me.yh.springreact.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {

    @GetMapping("/")
    public String index() {
        return "index.html";
    }

    @ResponseBody
    @GetMapping("/api/react")
    public String react() {
        System.out.println("호출");
        return "react!";
    }
}
