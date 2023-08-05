package com.amitthk.ng.yamm.server.app.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class MindNode {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "parent_id")
    private MindNode parent;

    // getters, setters, constructors
}
