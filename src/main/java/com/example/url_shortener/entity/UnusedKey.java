package com.example.url_shortener.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "unused_keys", indexes = {
    @Index(name = "idx_unused_keys_key", columnList = "short_key", unique = true)
})
public class UnusedKey {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "short_key", unique = true, nullable = false, length = 10)
    private String shortKey;

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @PrePersist
    public void prePersist() {
        if (createdAt == null) {
            createdAt = LocalDateTime.now();
        }
    }

    public UnusedKey() {}

    public UnusedKey(String shortKey) {
        this.shortKey = shortKey;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getShortKey() { return shortKey; }
    public void setShortKey(String shortKey) { this.shortKey = shortKey; }
    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
