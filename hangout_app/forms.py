from django.forms import ModelForm
from .models import User
from django.contrib.auth import authenticate, login
from django.contrib.auth.forms import UserCreationForm
from django import forms
from phone_field import PhoneField
from django.core.exceptions import ValidationError

class UserCreateForm(forms.Form):
    username = forms.CharField(label='Enter Username', min_length=4, max_length=150)
    email = forms.EmailField(label='Enter email')
    password1 = forms.CharField(label='Enter password', widget=forms.PasswordInput)
    password2 = forms.CharField(label='Confirm password', widget=forms.PasswordInput)
    firstname = forms.CharField(label='Enter First Name', min_length=1, max_length=50)
    lastname = forms.CharField(label='Enter Last Name', min_length=1, max_length=50)
    phone_number = forms.PhoneField(label='Enter Phone Number', min_length=10, max_length=10)
    
    def clean_username(self):
        username = self.cleaned_data['username'].lower()
        r = User.objects.filter(username=username)
        if r.count():
            raise  ValidationError("Username already exists")
        return username

    def clean_email(self):
        email = self.cleaned_data['email'].lower()
        r = User.objects.filter(email=email)
        if r.count():
            raise  ValidationError("Email already exists")
        return email

    def clean_password2(self):
        password1 = self.cleaned_data.get('password1')
        password2 = self.cleaned_data.get('password2')

        if password1 and password2 and password1 != password2:
            raise ValidationError("Password don't match")

        return password2

    def save(self, commit=True):
        user = User.objects.create_user(
            self.cleaned_data['username'],
            self.cleaned_data['email'],
            self.cleaned_data['password1']
            self.cleaned_data['firstname']
            self.cleaned_data['lastname']
            self.form.cleaned_data['phone_number']

            if password1 and password2 and password1 != password2:
                raise ValidationError("Password don't match")
        )
        return user