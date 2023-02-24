from django.db import models

class Computer(models.Model):
    name=models.CharField(max_length=20)
    id_computer=models.CharField(max_length=20)
    id_monitor=models.CharField(max_length=20)
    anydesk=models.CharField(max_length=20)
    swi = models.PositiveBigIntegerField()
    puert=models.PositiveIntegerField()
    ip=models.CharField(max_length=20)
    def __str__(self):
        return self.name 
    

