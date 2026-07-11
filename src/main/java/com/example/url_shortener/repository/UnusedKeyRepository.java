package com.example.url_shortener.repository;

import com.example.url_shortener.entity.UnusedKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface UnusedKeyRepository extends JpaRepository<UnusedKey, Long> {

    @Query(value = "SELECT * FROM unused_keys ORDER BY id LIMIT ?1", nativeQuery = true)
    List<UnusedKey> findBatch(int limit);

    @Modifying
    @Transactional
    @Query("DELETE FROM UnusedKey u WHERE u.id IN ?1")
    void deleteBatch(List<Long> ids);
}
