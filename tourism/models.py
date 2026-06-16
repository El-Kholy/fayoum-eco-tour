from django.db import models


class AuditLogs(models.Model):
    id = models.CharField(primary_key=True, max_length=36)
    user_id = models.CharField(max_length=36, blank=True, null=True)
    action = models.CharField(max_length=50)
    table_name = models.CharField(max_length=100, blank=True, null=True)
    record_id = models.CharField(max_length=36, blank=True, null=True)
    old_data = models.TextField(blank=True, null=True)
    new_data = models.TextField(blank=True, null=True)
    ip_address = models.CharField(max_length=45, blank=True, null=True)
    created_at = models.DateTimeField()

    class Meta:
        managed = True
        db_table = 'audit_logs'


class Users(models.Model):
    id = models.AutoField(primary_key=True)
    full_name = models.CharField(max_length=150)
    email = models.EmailField(unique=True, max_length=255)
    password_hash = models.CharField(max_length=255)
    phone_encrypted = models.CharField(max_length=500, blank=True, null=True)
    is_active = models.BooleanField(default=True)
    failed_logins = models.SmallIntegerField(default=0)
    locked_until = models.DateTimeField(blank=True, null=True)
    email_verified = models.BooleanField(default=False)
    deleted_at = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        managed = True
        db_table = 'users'


class BankTransfers(models.Model):
    id = models.CharField(primary_key=True, max_length=36)
    payment = models.OneToOneField('Payments', models.DO_NOTHING)
    bank_name = models.CharField(max_length=100)
    account_name = models.CharField(max_length=150)
    reference = models.CharField(max_length=100)

    class Meta:
        managed = True
        db_table = 'bank_transfers'


class BookingGuests(models.Model):
    id = models.CharField(primary_key=True, max_length=36)
    booking = models.ForeignKey('Bookings', models.DO_NOTHING)
    full_name = models.CharField(max_length=255)
    national_id_encrypted = models.CharField(max_length=500, blank=True, null=True)
    nationality = models.CharField(max_length=100, blank=True, null=True)
    person_type = models.CharField(max_length=10)
    phone_encrypted = models.CharField(max_length=500, blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'booking_guests'


class Bookings(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey('Users', on_delete=models.CASCADE, db_constraint=False)
    booking_type = models.CharField(max_length=20)
    total_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    status = models.CharField(max_length=20, default='pending')
    confirmation_code = models.CharField(unique=True, max_length=20)
    notes = models.TextField(blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        managed = True
        db_table = 'bookings'


class CardPayments(models.Model):
    id = models.CharField(primary_key=True, max_length=36)
    payment = models.OneToOneField('Payments', models.DO_NOTHING)
    card_holder = models.CharField(max_length=150)
    last4 = models.CharField(max_length=4)

    class Meta:
        managed = True
        db_table = 'card_payments'


class Governorates(models.Model):
    id = models.CharField(primary_key=True, max_length=36)
    name_ar = models.CharField(max_length=100)
    name_en = models.CharField(max_length=100)

    class Meta:
        managed = True
        db_table = 'governorates'


class HotelBookings(models.Model):
    id = models.CharField(primary_key=True, max_length=36)
    booking = models.OneToOneField(Bookings, models.DO_NOTHING)
    room = models.ForeignKey('HotelRooms', models.DO_NOTHING)
    check_in = models.DateField()
    check_out = models.DateField()

    class Meta:
        managed = True
        db_table = 'hotel_bookings'


class HotelFavorites(models.Model):
    user = models.ForeignKey('Users', models.DO_NOTHING)
    hotel = models.ForeignKey('Hotels', models.DO_NOTHING)
    created_at = models.DateTimeField()

    class Meta:
        managed = True
        db_table = 'hotel_favorites'
        unique_together = (('user', 'hotel'),)


class HotelReviews(models.Model):
    id = models.CharField(primary_key=True, max_length=36)
    user = models.ForeignKey('Users', models.DO_NOTHING)
    hotel = models.ForeignKey('Hotels', models.DO_NOTHING)
    rating = models.SmallIntegerField()
    comment = models.TextField(blank=True, null=True)
    is_approved = models.BooleanField()
    created_at = models.DateTimeField()

    class Meta:
        managed = True
        db_table = 'hotel_reviews'
        unique_together = (('user', 'hotel'),)


class HotelRooms(models.Model):
    id = models.CharField(primary_key=True, max_length=36)
    hotel = models.ForeignKey('Hotels', models.DO_NOTHING)
    room_type = models.CharField(max_length=100)
    price_per_night = models.DecimalField(max_digits=10, decimal_places=2)
    capacity = models.SmallIntegerField()
    available_count = models.SmallIntegerField()
    description_ar = models.CharField(max_length=500, blank=True, null=True)
    description_en = models.CharField(max_length=500, blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'hotel_rooms'


class Hotels(models.Model):
    id = models.CharField(primary_key=True, max_length=36)
    place = models.ForeignKey('Places', models.DO_NOTHING, blank=True, null=True)
    name = models.CharField(max_length=255)
    description_ar = models.TextField(blank=True, null=True)
    description_en = models.TextField(blank=True, null=True)
    stars = models.SmallIntegerField()
    contact_phone = models.CharField(max_length=50, blank=True, null=True)
    address = models.CharField(max_length=500, blank=True, null=True)
    lat = models.DecimalField(max_digits=10, decimal_places=7, blank=True, null=True)
    lng = models.DecimalField(max_digits=10, decimal_places=7, blank=True, null=True)
    cover_image = models.CharField(max_length=500, blank=True, null=True)
    is_active = models.BooleanField()
    deleted_at = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()

    class Meta:
        managed = True
        db_table = 'hotels'


class Instructions(models.Model):
    id = models.CharField(primary_key=True, max_length=36)
    title_ar = models.CharField(max_length=255)
    title_en = models.CharField(max_length=255)
    content_ar = models.TextField()
    content_en = models.TextField()
    category = models.CharField(max_length=100, blank=True, null=True)
    display_order = models.SmallIntegerField()
    is_active = models.BooleanField()
    updated_at = models.DateTimeField()

    class Meta:
        managed = True
        db_table = 'instructions'


class Payments(models.Model):
    id = models.CharField(primary_key=True, max_length=36)
    booking = models.ForeignKey(Bookings, models.DO_NOTHING)
    method = models.CharField(max_length=20)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    currency = models.CharField(max_length=10, default='EGP')
    status = models.CharField(max_length=20)
    transaction_id = models.CharField(max_length=255, blank=True, null=True)
    gateway_response = models.TextField(blank=True, null=True)
    paid_at = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()

    class Meta:
        managed = True
        db_table = 'payments'


class Permissions(models.Model):
    id = models.CharField(primary_key=True, max_length=36)
    name = models.CharField(unique=True, max_length=100)
    description = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'permissions'


class PlaceBookings(models.Model):
    id = models.CharField(primary_key=True, max_length=36)
    booking = models.OneToOneField(Bookings, models.DO_NOTHING)
    place = models.ForeignKey('Places', models.DO_NOTHING)
    visit_date = models.DateField()
    visit_time = models.TimeField(blank=True, null=True)
    persons_count = models.SmallIntegerField()

    class Meta:
        managed = True
        db_table = 'place_bookings'


class PlaceFavorites(models.Model):
    user = models.ForeignKey('Users', models.DO_NOTHING)
    place = models.ForeignKey('Places', models.DO_NOTHING)
    created_at = models.DateTimeField()

    class Meta:
        managed = True
        db_table = 'place_favorites'
        unique_together = (('user', 'place'),)


class PlaceReviews(models.Model):
    id = models.CharField(primary_key=True, max_length=36)
    user = models.ForeignKey('Users', models.DO_NOTHING)
    place = models.ForeignKey('Places', models.DO_NOTHING)
    rating = models.SmallIntegerField()
    comment = models.TextField(blank=True, null=True)
    is_approved = models.BooleanField()
    created_at = models.DateTimeField()

    class Meta:
        managed = True
        db_table = 'place_reviews'
        unique_together = (('user', 'place'),)


class Places(models.Model):
    id = models.CharField(primary_key=True, max_length=36)
    governorate = models.ForeignKey(Governorates, models.DO_NOTHING, blank=True, null=True)
    name_ar = models.CharField(max_length=255)
    name_en = models.CharField(max_length=255)
    category = models.CharField(max_length=30)
    description_ar = models.TextField(blank=True, null=True)
    description_en = models.TextField(blank=True, null=True)
    lat = models.DecimalField(max_digits=10, decimal_places=7, blank=True, null=True)
    lng = models.DecimalField(max_digits=10, decimal_places=7, blank=True, null=True)
    cover_image = models.CharField(max_length=500, blank=True, null=True)
    is_active = models.BooleanField()
    deleted_at = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()

    class Meta:
        managed = True
        db_table = 'places'


class Profiles(models.Model):
    id = models.CharField(primary_key=True, max_length=36)
    user = models.OneToOneField('Users', models.DO_NOTHING)
    image = models.ImageField(upload_to='profiles/', blank=True, null=True)
    nationality = models.CharField(max_length=100, blank=True, null=True)
    phone = models.CharField(max_length=20, blank=True, null=True)
    country = models.CharField(max_length=100, blank=True, null=True)
    city = models.CharField(max_length=100, blank=True, null=True)
    preferred_language = models.CharField(max_length=10, default='ar')
    date_of_birth = models.DateField(blank=True, null=True)
    bio = models.TextField(blank=True, null=True)
    updated_at = models.DateTimeField()

    class Meta:
        managed = True
        db_table = 'profiles'


class RestaurantBookings(models.Model):
    id = models.CharField(primary_key=True, max_length=36)
    booking = models.OneToOneField(Bookings, models.DO_NOTHING)
    restaurant = models.ForeignKey('Restaurants', models.DO_NOTHING)
    visit_date = models.DateField()
    visit_time = models.TimeField()
    persons_count = models.SmallIntegerField()

    class Meta:
        managed = True
        db_table = 'restaurant_bookings'


class RestaurantFavorites(models.Model):
    user = models.ForeignKey('Users', models.DO_NOTHING)
    restaurant = models.ForeignKey('Restaurants', models.DO_NOTHING)
    created_at = models.DateTimeField()

    class Meta:
        managed = True
        db_table = 'restaurant_favorites'
        unique_together = (('user', 'restaurant'),)


class RestaurantReviews(models.Model):
    id = models.CharField(primary_key=True, max_length=36)
    user = models.ForeignKey('Users', models.DO_NOTHING)
    restaurant = models.ForeignKey('Restaurants', models.DO_NOTHING)
    rating = models.SmallIntegerField()
    comment = models.TextField(blank=True, null=True)
    is_approved = models.BooleanField()
    created_at = models.DateTimeField()

    class Meta:
        managed = True
        db_table = 'restaurant_reviews'
        unique_together = (('user', 'restaurant'),)


class Restaurants(models.Model):
    id = models.CharField(primary_key=True, max_length=36)
    place = models.ForeignKey(Places, models.DO_NOTHING, blank=True, null=True)
    name = models.CharField(max_length=255)
    description_ar = models.TextField(blank=True, null=True)
    description_en = models.TextField(blank=True, null=True)
    cuisine_type = models.CharField(max_length=30)
    avg_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    contact_phone = models.CharField(max_length=50, blank=True, null=True)
    address = models.CharField(max_length=500, blank=True, null=True)
    lat = models.DecimalField(max_digits=10, decimal_places=7, blank=True, null=True)
    lng = models.DecimalField(max_digits=10, decimal_places=7, blank=True, null=True)
    cover_image = models.CharField(max_length=500, blank=True, null=True)
    is_active = models.BooleanField()
    deleted_at = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()

    class Meta:
        managed = True
        db_table = 'restaurants'


class RolePermissions(models.Model):
    role = models.ForeignKey('Roles', models.DO_NOTHING)
    permission = models.ForeignKey(Permissions, models.DO_NOTHING)

    class Meta:
        managed = True
        db_table = 'role_permissions'
        unique_together = (('role', 'permission'),)


class Roles(models.Model):
    id = models.CharField(primary_key=True, max_length=36)
    name = models.CharField(unique=True, max_length=50)
    description = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'roles'


class Sessions(models.Model):
    id = models.CharField(primary_key=True, max_length=36)
    user = models.ForeignKey('Users', models.DO_NOTHING)
    token_hash = models.CharField(unique=True, max_length=255)
    refresh_token = models.CharField(max_length=255, blank=True, null=True)
    device_name = models.CharField(max_length=100, blank=True, null=True)
    ip_address = models.CharField(max_length=45)
    user_agent = models.CharField(max_length=500, blank=True, null=True)
    revoked_at = models.DateTimeField(blank=True, null=True)
    expires_at = models.DateTimeField()
    created_at = models.DateTimeField()

    class Meta:
        managed = True
        db_table = 'sessions'


class TripBookings(models.Model):
    id = models.CharField(primary_key=True, max_length=36)
    booking = models.OneToOneField(Bookings, models.DO_NOTHING)
    trip = models.ForeignKey('Trips', models.DO_NOTHING)
    visit_date = models.DateField()
    persons_count = models.SmallIntegerField()

    class Meta:
        managed = True
        db_table = 'trip_bookings'


class TripFavorites(models.Model):
    user = models.ForeignKey('Users', models.DO_NOTHING)
    trip = models.ForeignKey('Trips', models.DO_NOTHING)
    created_at = models.DateTimeField()

    class Meta:
        managed = True
        db_table = 'trip_favorites'
        unique_together = (('user', 'trip'),)


class TripReviews(models.Model):
    id = models.CharField(primary_key=True, max_length=36)
    user = models.ForeignKey('Users', models.DO_NOTHING)
    trip = models.ForeignKey('Trips', models.DO_NOTHING)
    rating = models.SmallIntegerField()
    comment = models.TextField(blank=True, null=True)
    is_approved = models.BooleanField()
    created_at = models.DateTimeField()

    class Meta:
        managed = True
        db_table = 'trip_reviews'
        unique_together = (('user', 'trip'),)


class Trips(models.Model):
    id = models.CharField(primary_key=True, max_length=36)
    place = models.ForeignKey(Places, models.DO_NOTHING, blank=True, null=True)
    name_ar = models.CharField(max_length=255)
    name_en = models.CharField(max_length=255)
    description_ar = models.TextField(blank=True, null=True)
    description_en = models.TextField(blank=True, null=True)
    price_per_person = models.DecimalField(max_digits=10, decimal_places=2)
    max_persons = models.SmallIntegerField(blank=True, null=True)
    cover_image = models.CharField(max_length=500, blank=True, null=True)
    is_active = models.BooleanField()
    deleted_at = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()

    class Meta:
        managed = True
        db_table = 'trips'


class UserRoles(models.Model):
    user = models.ForeignKey('Users', models.DO_NOTHING)
    role = models.ForeignKey(Roles, models.DO_NOTHING)
    assigned_at = models.DateTimeField()
    assigned_by = models.CharField(max_length=36, blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'user_roles'
        unique_together = (('user', 'role'),)


class VisitingHours(models.Model):
    id = models.CharField(primary_key=True, max_length=36)
    place = models.ForeignKey(Places, models.DO_NOTHING)
    day_of_week = models.SmallIntegerField()
    open_time = models.TimeField()
    close_time = models.TimeField()
    best_season = models.CharField(max_length=20)
    notes_ar = models.CharField(max_length=500, blank=True, null=True)
    notes_en = models.CharField(max_length=500, blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'visiting_hours'


class Reservation(models.Model):
    user = models.ForeignKey(Users, on_delete=models.CASCADE)
    destination = models.CharField(max_length=100)
    travel_date = models.DateField()
    guests = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
