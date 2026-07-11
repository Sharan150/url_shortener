package com.example.url_shortener.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.Duration;

@Service
public class CacheService {
    private final RestTemplate restTemplate = new RestTemplate();

    @Value("${redis.host}")
    private String redisHost;

    @Value("${redis.password}")
    private String redisToken;

    public void put(String key, String value, Duration ttl) {
        try {
            String url = "https://" + redisHost + "/set/" + key + "?EX=" + ttl.getSeconds();
            HttpHeaders headers = new HttpHeaders();
            headers.set("Authorization", "Bearer " + redisToken);
            HttpEntity<String> entity = new HttpEntity<>(value, headers);
            restTemplate.exchange(url, HttpMethod.POST, entity, String.class);
        } catch (Exception e) {
            // Ignore cache errors
        }
    }

    public String get(String key) {
        try {
            String url = "https://" + redisHost + "/get/" + key;
            HttpHeaders headers = new HttpHeaders();
            headers.set("Authorization", "Bearer " + redisToken);
            HttpEntity<String> entity = new HttpEntity<>(headers);
            ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);
            String body = response.getBody();
            if (body != null && body.contains("\"result\":\"")) {
                int start = body.indexOf("\"result\":\"") + 10;
                int end = body.lastIndexOf("\"");
                if (end > start) return body.substring(start, end);
            }
            return null;
        } catch (Exception e) {
            return null;
        }
    }
}
