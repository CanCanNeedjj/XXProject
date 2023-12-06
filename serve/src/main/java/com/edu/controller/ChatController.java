package com.edu.controller;


import com.edu.chatutil.Chat;
import com.edu.util.Result;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
public class ChatController {

    @Resource
    Chat chat;

    @GetMapping("/addChat")
    public Result addChat(@RequestParam("question") String question){
        return Result.success(chat.playChat(chat,question));
    }

}
