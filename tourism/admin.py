from django.contrib import admin
from .models import Users, Hotels, Places, Restaurants, Trips, Bookings


@admin.register(Users)
class UsersAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'email', 'is_active', 'created_at')


admin.site.register(Hotels)
admin.site.register(Places)
admin.site.register(Restaurants)
admin.site.register(Trips)
admin.site.register(Bookings)