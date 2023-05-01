package com.doco.service;

import com.doco.bean.Medicine;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class MedicineServiceImpl {
    private static List<Medicine> medicines = Arrays.asList(new Medicine(1, "Paragesic", "Fever", "NA"),
            new Medicine(2, "Nicip", "Fever/Pain", "NA"),
            new Medicine(3, "Citrazin", "Allergy", "NA"),
            new Medicine(4, "Sumol Plus", "Fever", "NA"));

    public List<Medicine> getAllMedicines(){
        return medicines;
    }

    public void save(Medicine medicine){
         medicines.add(medicine);
    }

    public void delete(int id){
        medicines.removeIf(x -> x.getId() == id);
    }


}
