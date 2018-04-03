package com.example.shali.loginapp;

import android.app.AlertDialog;
import android.content.DialogInterface;
import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;

import java.util.Objects;

public class LoginActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
    }

    protected void LoginHandler(View v){
        Intent indexIntent = new Intent(this, IndexActivity.class);
        callbackManager = CallbackManager.Factory.create();
        EditText name = (EditText) findViewById(R.id.name);
        EditText pass = (EditText) findViewById(R.id.pass);
        boolean loggedIn = AccessToken.getCurrentAccessToken() == null;
        if(Objects.equals(name.getText().toString(),new String("admin")) && Objects.equals(pass.getText().toString(),new String("admin")) || loggedIn){
            startActivity(indexIntent);

        }else{
            AlertDialog.Builder dlgAlert  = new AlertDialog.Builder(this);
            dlgAlert.setMessage("Invalid login. Please check your credentials ");
            dlgAlert.setTitle("App Title");
            dlgAlert.setPositiveButton("Ok",
                    new DialogInterface.OnClickListener() {
                        public void onClick(DialogInterface dialog, int which) {
                            dialog.dismiss();
                        }
                    });
            dlgAlert.setCancelable(true);
            dlgAlert.create().show();

        }

    }

    protected void SignUpHandler(View v){
        Intent intent = new Intent(this, SignUpActivity.class);
        startActivity(intent);
    }

    private static final String EMAIL = "email";

    loginButton = (LoginButton) findViewById(R.id.login_button);
    loginButton.setReadPermissions(Arrays.asList(EMAIL));
    // If you are using in a fragment, call loginButton.setFragment(this);

    // Callback registration
    loginButton.registerCallback(callbackManager, new FacebookCallback<LoginResult>() {
        @Override
        public void onSuccess(LoginResult loginResult) {
            // App code
        }

        @Override
        public void onCancel() {
            // App code
        }

        @Override
        public void onError(FacebookException exception) {
            // App code
        }
    });
}
