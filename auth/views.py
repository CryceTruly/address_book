from rest_framework.generics import GenericAPIView
from .serializers import RegisterSerializer,UserSerializer
from rest_framework.response import Response

# Create your views here.
class RegisterApi(GenericAPIView):
    serializer_class=RegisterSerializer

    def post(self,request,*args,**kwags):
        serializer=self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        user=serializer.save()
        return Response({
            "user":UserSerializer(user, context=self.get_serializer_context()).data
        })
        

  