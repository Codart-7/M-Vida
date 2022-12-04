from django.contrib import admin
from .models import UserProfile, Contact

class UserProfileAdmin(admin.ModelAdmin):
    fields = [
            'user', 'username', 'first_name',
            'last_name', 'email', 'password']

admin.site.register(UserProfile, UserProfileAdmin)

#register the child class
class ContactAdmin(admin.ModelAdmin):
    fields = ['userprofile', 'country', 'city', 'birth_date', 'weight']
admin.site.register(Contact, ContactAdmin)
