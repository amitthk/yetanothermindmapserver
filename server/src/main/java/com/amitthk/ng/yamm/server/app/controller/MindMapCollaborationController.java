package com.amitthk.ng.yamm.server.app.controller;


import com.amitthk.ng.yamm.server.app.model.MindNode;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class MindMapCollaborationController {

    @MessageMapping("/add-node")
    @SendTo("/topic/add-node")
    public MindNode addNode(@Payload MindNode node) {
        // Handle adding the node to the mind map and return the updated node
        // You can also broadcast the updated mind map to all connected clients
        return node;
    }

    // Similar methods for other events
}