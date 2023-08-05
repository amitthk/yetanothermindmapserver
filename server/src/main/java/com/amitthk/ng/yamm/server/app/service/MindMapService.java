package com.amitthk.ng.yamm.server.app.service;

import com.amitthk.ng.yamm.server.app.model.MindNode;
import com.amitthk.ng.yamm.server.app.repository.MindNodeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MindMapService {
    private final MindNodeRepository nodeRepository;

    @Autowired
    public MindMapService(MindNodeRepository nodeRepository) {
        this.nodeRepository = nodeRepository;
    }

    public List<MindNode> getAllNodes() {
        return nodeRepository.findAll();
    }

    public Optional<MindNode> getNodeById(Long id) {
        return nodeRepository.findById(id);
    }

    public MindNode addNode(MindNode node) {
        return nodeRepository.save(node);
    }

    public void deleteNode(Long id) {
        nodeRepository.deleteById(id);
    }

    public MindNode updateNode(MindNode node) {
        return nodeRepository.save(node);
    }

    public void changeParent(Long nodeId, Long parentId) {
        MindNode node = nodeRepository.getById(nodeId);
        MindNode parent = nodeRepository.getById(parentId);
        node.setParent(parent);
        nodeRepository.save(node);
    }
}
