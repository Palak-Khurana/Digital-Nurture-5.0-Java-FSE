package com.cognizant.spring_learn.util;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.cognizant.spring_learn.model.Country;
import com.cognizant.spring_learn.model.CountryList;

@Component
public class CountryUtil {

    @Autowired
    private CountryList countryList;

    public List<Country> getCountryList() {
        return countryList.getCountryList();
    }
}