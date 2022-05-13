from django.shortcuts import render
import requests
import json
from django.contrib import messages,auth
from django.http import HttpResponseRedirect




def login(request):
    return render(request,'login.html')

def QrPage(request):
    return render(request,'home.html')

def User_RegiterSubmit(request):
    if request.method =='POST':
        name = request.POST['Name']
        email = request.POST['Email']      
        password = request.POST['Password']
        url = 'https://n6edeo7xci.execute-api.ap-south-1.amazonaws.com/v1/provision'
        headers = {'content-type':'application/json'}
        print(headers)
        data = {
            'name':name,
            'email':email,
            'password':password,
            }
        r = requests.post(url, data = json.dumps(data), headers=headers)
    
        if r.status_code ==200:
          messages.success(request, 'User Registered Successfully')
          return HttpResponseRedirect('/')
        else:
          messages.warning(request,'User Alredy Exits')
          return HttpResponseRedirect('/')
    else:
        messages.warning(request,'Method not found')
        return HttpResponseRedirect('/')


def login_submit(request):
    if request.method == 'POST':
        email = request.POST['Email']
        print(email)
        passwd = request.POST['Password']
        print(passwd)
        url = 'https://n6edeo7xci.execute-api.ap-south-1.amazonaws.com/v1/login' 
        headers = {'content-type':'application/json'}
        data = {"email": email, "password": passwd} 
        r = requests.post(url, data=json.dumps(data), headers=headers)
        if r.status_code == 200:
            #api_request = json.loads(r.content)
            return render(request,'home.html')
        elif r.status_code == 203:
            messages.error(request,'Please verify your email first ')
            return HttpResponseRedirect('/')      
        else:
            messages.error(request,'Invalid Credentials')
            return HttpResponseRedirect('/')
    else:
        messages.error(request,'Invalid Credentials')
        return HttpResponseRedirect('/')




  
def logout(request):
  auth.logout(request)
  return HttpResponseRedirect('/')