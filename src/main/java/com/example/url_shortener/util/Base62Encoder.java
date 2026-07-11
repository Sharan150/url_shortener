package com.example.url_shortener.util;

public class Base62Encoder {

    private static final String BASE62_CHARACTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    private static final int BASE = BASE62_CHARACTERS.length();

    public static String encode(long value) {
        StringBuilder sb = new StringBuilder();
        if (value == 0) {
            return String.valueOf(BASE62_CHARACTERS.charAt(0));
        }
        while (value > 0) {
            sb.insert(0, BASE62_CHARACTERS.charAt((int) (value % BASE)));
            value /= BASE;
        }
        return sb.toString();
    }
}
