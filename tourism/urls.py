from django.urls import path
from . import views

# تأكدي من كتابة الكلمة دي بالظبط
urlpatterns = [
    path('', views.index_view, name='index'), 
    path('tarhibia/', views.tarhibia_view, name='tarhibia'),
    path('login/', views.login_view, name='login'),
    path('signup/', views.signup_view, name='signup'),
    path('home/', views.index_view, name='index'),
    path('contact/', views.contact_view, name='contact'),
    path('about/', views.about_view, name='about'),
    path('guidelines/', views.guidelines_view, name='guidelines'), 
    path('restaurants/', views.restaurants_view, name='restaurants'),
    path('landmarks/', views.landmarks_view, name='landmarks'),
    path('hotel/', views.hotel_view, name='hotel'),
    path('reservation/', views.reservation_view, name='reservation'),
    path('qaroon/', views.qaroon_view, name='qaroon'),
    path('tones/', views.tones_view, name='tones'),
    path('lahon/', views.lahon_view, name='lahon'),
    path('rayan/', views.rayan_view, name='rayan'),
    path('hetan/', views.hetan_view, name='hetan'),
    path('hawara/', views.hawara_view, name='hawara'),
    path('kranes/', views.kranes_view, name='kranes'),
    path('madi/', views.madi_view, name='madi'),
    path('modwara/', views.modwara_view, name='modwara'),
    path('komo_shen/', views.komo_shen_view, name='komo_shen'),
    path('ganoby/', views.ganoby_view, name='ganoby'),
    path('shmaly/', views.shmaly_view, name='shmaly'),
    path('qawat/', views.qawat_view, name='qawat'),
    path('haram/', views.haram_view, name='haram'),
    path('montagau/', views.montagau_view, name='montagau'),
    
    path('mash/', views.mash_view, name='mash'),
    path('swaqy/', views.swaqy_view, name='swaqy'),
    path('profile/', views.profile_view, name='profile'),
    path('logout/', views.logout_view, name='logout'),
    path('search/', views.search_logic, name='search_logic'),
    path('google-success/', views.google_success, name='google_success'),

]
