from django.http.response import JsonResponse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from .models import Computer
import json

# Create your views here.


class ComputerView(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self, request, id=0):
        if (id > 0):
            computers = list(Computer.objects.filter(id=id).values())
            if len(computers) > 0:
                computer = computers[0]
                datos = {'message': "Success", 'Computers': computer}
            else:
                datos = {'message': "Computers not found..."}
            return JsonResponse(datos)
        else:
            computers = list(Computer.objects.values())
            if len(computers) > 0:
                datos = {'message': "Success", 'Computers': computers}
            else:
                datos = {'message': "Computers not found..."}
            return JsonResponse(datos)

    def post(self, request):
        jd = json.loads(request.body)
        Computer.objects.create(name=jd['name'], id_computer=jd['id_computer'], id_monitor=jd['id_monitor'],anydesk=jd['anydesk'] ,swi=jd['swi'],puert=jd['puert'],ip=jd['ip'])
        datos = {'message': "Success"}
        return JsonResponse(datos)

    def put(self, request, id):
        jd = json.loads(request.body)
        computers = list(Computer.objects.filter(id=id).values())
        if len(computers) > 0:
            computer = Computer.objects.get(id=id)
            computer.name = jd['name']
            computer.id_computer = jd['id_computer']
            computer.id_monitor = jd['id_monitor']
            computer.anydesk = jd['anydesk']
            computer.swi = jd['swi']
            computer.puert = jd['puert']
            computer.ip = jd['ip']
            computer.save()
            datos = {'message': "Success"}
        else:
            datos = {'message': "Computers not found..."}
        return JsonResponse(datos)

    def delete(self, request, id):
        computers = list(Computer.objects.filter(id=id).values())
        if len(computers) > 0:
            Computer.objects.filter(id=id).delete()
            datos = {'message': "Success"}
        else:
            datos = {'message': "Computers not found..."}
        return JsonResponse(datos)