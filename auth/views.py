from rest_framework.generics import GenericAPIView
from .serializers import RegisterSerializer
from rest_framework.response import Response

# Create your views here.
class RegisterApi(GenericAPIView):
    serializer_class=RegisterSerializer

    def post(self,request,*args,**kwags):
        serializer=self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response('user created successfully')

  