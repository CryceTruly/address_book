from rest_framework import routers
from .views import ContactViewSet
router = routers.DefaultRouter()

router.register('contacts', ContactViewSet, base_name='contact')
urlpatterns = router.urls
