from django.db import models



class Swi(models.Model):
    name = models.CharField(max_length=20)

class Computer(models.Model):
    name=models.CharField(max_length=20)
    id_computer=models.CharField(max_length=20)
    id_monitor=models.CharField(max_length=20)
    anydesk=models.CharField(max_length=20)
    swi=models.ForeignKey(Swi,null=True,on_delete=models.CASCADE)
    puert=models.PositiveIntegerField()
    ip=models.CharField(max_length=20)
    def __str__(self):
        return self.name 