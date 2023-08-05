package com.amitthk.ng.yamm.server.app.repository;

import com.amitthk.ng.yamm.server.app.model.MindNode;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MindNodeRepository extends JpaRepository<MindNode, Long> {
    // Add custom queries if needed
}
