from django.urls import path
from .views import ComputerView

urlpatterns = [
    path('computers/',ComputerView.as_view()),
    path('computers/<int:id>',ComputerView.as_view(), name='computers_process')
]