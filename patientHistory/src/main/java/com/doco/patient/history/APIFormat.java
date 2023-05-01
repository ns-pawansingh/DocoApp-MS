package com.doco.patient.history;

import java.util.Map;

public class APIFormat {
    private String apiName;
    private Object json;
    private String method;
    private Map<String, String> headers;

    public APIFormat(String apiName, Object json, String method) {
        this.apiName = apiName;
        this.json = json;
        this.method = method;
    }
    public APIFormat(){}

    public String getApiName() {
        return apiName;
    }

    public void setApiName(String apiName) {
        this.apiName = apiName;
    }

    public Object getJson() {
        return json;
    }

    public void setJson(Object json) {
        this.json = json;
    }

    public String getMethod() {
        return method;
    }

    public void setMethod(String method) {
        this.method = method;
    }

    public Map<String, String> getHeaders() {
        return headers;
    }

    public void setHeaders(Map<String, String> headers) {
        this.headers = headers;
    }
}