package com.amitthk.ng.yamm.server.app.controller;

import com.amitthk.ng.yamm.server.app.model.MindNode;
import com.amitthk.ng.yamm.server.app.service.MindMapService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/mindmap")
public class MindMapController {
    private final MindMapService mindMapService;

    @Autowired
    public MindMapController(MindMapService mindMapService) {
        this.mindMapService = mindMapService;
    }

    @GetMapping("/nodes")
    public ResponseEntity<List<MindNode>> getAllNodes() {
        List<MindNode> nodes = mindMapService.getAllNodes();
        return new ResponseEntity<>(nodes, HttpStatus.OK);
    }

    @GetMapping("/nodes/{id}")
    public ResponseEntity<MindNode> getNodeById(@PathVariable Long id) {
        Optional<MindNode> node = mindMapService.getNodeById(id);
        return node.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/nodes")
    public ResponseEntity<MindNode> addNode(@RequestBody MindNode node) {
        MindNode savedNode = mindMapService.addNode(node);
        return new ResponseEntity<>(savedNode, HttpStatus.CREATED);
    }

    @PutMapping("/nodes/{id}")
    public ResponseEntity<MindNode> updateNode(@PathVariable Long id, @RequestBody MindNode node) {
        if (!node.getId().equals(id)) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        MindNode updatedNode = mindMapService.updateNode(node);
        return new ResponseEntity<>(updatedNode, HttpStatus.OK);
    }

    @DeleteMapping("/nodes/{id}")
    public ResponseEntity<Void> deleteNode(@PathVariable Long id) {
        mindMapService.deleteNode(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/nodes/{nodeId}/parent/{parentId}")
    public ResponseEntity<Void> changeParent(@PathVariable Long nodeId, @PathVariable Long parentId) {
        mindMapService.changeParent(nodeId, parentId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
