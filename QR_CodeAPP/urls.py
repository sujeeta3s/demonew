from django.urls import path
from QR_CodeAPP import views

urlpatterns = [
    #login
    path('', views.login,name='login'),
    path('login_submit/', views.login_submit,name='login_submit'),
    #logout
    path('User_RegiterSubmit/', views.User_RegiterSubmit, name='User_RegiterSubmit'),
    path('QrPage/', views.QrPage, name='QrPage'),
    path('logout/', views.logout,name='logout'),


]
