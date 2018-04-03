package com.example.shali.loginapp;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;

public class SignUpActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sign_up);
    }

    protected void SignUp(View v) {
        Intent intent = new Intent(this, LoginActivity.class);
        EditText f_name = (EditText) findViewById(R.id.f_name);
        EditText l_name = (EditText) findViewById(R.id.l_name);
        EditText pass = (EditText) findViewById(R.id.pass);
        startActivity(intent);
    }


}
