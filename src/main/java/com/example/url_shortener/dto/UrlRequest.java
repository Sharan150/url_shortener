package com.example.url_shortener.dto;

import jakarta.validation.constraints.NotBlank;
import org.hibernate.validator.constraints.URL;

public class UrlRequest {
    @NotBlank(message = "URL cannot be blank")
    @URL(message = "Invalid URL format")
    private String longUrl;

    public String getLongUrl() { return longUrl; }
    public void setLongUrl(String longUrl) { this.longUrl = longUrl; }
}
