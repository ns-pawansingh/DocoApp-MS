package com.doco.patient.history.controller;

import com.doco.patient.history.APIFormat;
import com.doco.patient.history.Constant;
import com.doco.patient.history.model.MedicineDetail;
import com.doco.patient.history.model.PatientHistory;
import com.doco.patient.history.service.PatientHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;

@RestController
@RequestMapping("patient/history")
public class PatientController {

    @Autowired
    private PatientHistoryService patientService;

    @GetMapping("/last/{patientId}")
    public PatientHistory getPatientLastHistory(@PathVariable Long id) {
        return patientService.getPatientLastHistory(id);
    }

    @GetMapping("/all/{patientId}")
    public List<PatientHistory> getPatientAllHistory(@PathVariable Long patientId) {
        return patientService.getAllHistory(patientId);
    }

    @GetMapping("/{id}")
    public PatientHistory getPatientHistory(@PathVariable Long id) {
        return patientService.getPatientHistoryById(id);
    }

    @PostMapping("/save")
    public String save(@RequestBody PatientHistory patientDetail) {
        patientService.save(patientDetail);
        return Constant.CREATE_SUCCESS;
    }
    @PostMapping("/update")
    public String update(@RequestBody PatientHistory patientDetail) {
        patientService.save(patientDetail);
        return Constant.CREATE_SUCCESS;
    }
    @GetMapping("/api/info")
    public List<APIFormat> getAPIDetails() {
        return allAPIs();
    }

    private List<APIFormat> allAPIs() {
        return Arrays.asList(new APIFormat("patient/history/last/{patientId}", null, "GET"),
                new APIFormat("patient/history/all/{patientId}", null, "GET"),
                new APIFormat("patient/history/{id}", null, "GET"),
                new APIFormat("patient/history/save", new PatientHistory(), "POST"),
                new APIFormat("patient/history/save", new HashSet<>(Arrays.asList(new MedicineDetail())), "POST"));
    }

}
