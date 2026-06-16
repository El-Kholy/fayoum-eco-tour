from django.shortcuts import render, redirect
from django.contrib import messages
from django.utils.dateparse import parse_date
from django.contrib.auth.hashers import make_password, check_password
from .models import Users, Profiles
from django.utils import timezone
from django.contrib.auth import authenticate, login
from django.contrib.auth import login
import uuid
from .models import Bookings, HotelBookings, HotelRooms
from decimal import Decimal
from .models import (
    Users,
    Bookings,
    HotelBookings,
    HotelRooms,
    BookingGuests,
    Payments,
    CardPayments,
    BankTransfers,
    Restaurants,
    Hotels,
)

# صفحة تسجيل الدخول
def login_view(request):
    if request.method == 'POST':
        email = request.POST.get('email', '').strip()
        password = request.POST.get('password', '')

        try:
            user = Users.objects.get(email=email)

            if check_password(password, user.password_hash):

                # ✔️ SESSION SYSTEM
                request.session['user_id'] = str(user.id)
                request.session['user_name'] = user.full_name

                return redirect('index')

            else:
                messages.error(request, "كلمة السر غير صحيحة")

        except Users.DoesNotExist:
            messages.error(request, "البريد الإلكتروني غير موجود")

    return render(request, 'login.html')


def signup_view(request):
    # لو داخل بالفعل
    if request.session.get('user_id'):
        return redirect('index')

    if request.method == 'POST':
        fname = request.POST.get('first_name', '').strip()
        lname = request.POST.get('last_name', '').strip()
        email = request.POST.get('email', '').strip()
        password = request.POST.get('password', '')
        confirm = request.POST.get('confirm_password', '')

        # تحقق من الباسورد
        if password != confirm:
            messages.error(request, "كلمات السر غير متطابقة")
            return render(request, 'signup.html')

        # تحقق من الإيميل
        if Users.objects.filter(email=email).exists():
            messages.error(request, "هذا البريد مسجل بالفعل")
            return render(request, 'signup.html')

        # إنشاء المستخدم
        user = Users.objects.create(
            
            full_name=f"{fname} {lname}",
            email=email,
            password_hash=make_password(password),
            is_active=True,
            failed_logins=0,
            email_verified=False,
            created_at=timezone.now(),
            updated_at=timezone.now(),
        )

        # 🔥 تسجيل دخول تلقائي (SESSION)
        request.session['user_id'] = str(user.id)
        request.session['user_name'] = user.full_name

        messages.success(request, "تم إنشاء الحساب بنجاح!")
        return redirect('index')
    

    return render(request, 'signup.html')


def index_view(request):
    return render(request, 'index.html')


def tarhibia_view(request):
    return render(request, 'tarhibia.html')


def contact_view(request):
    return render(request, 'contact.html')


def about_view(request):
    return render(request, 'about.html')


def guidelines_view(request):
    return render(request, 'guidelines.html')

def restaurants_view(request):
    return render(request, 'restaurants.html')


def landmarks_view(request):
    return render(request, 'landmarks.html')


def hotel_view(request):
    return render(request, 'hotel.html')


def reservation_view(request):

    user_id = request.session.get('user_id')
    if not user_id:
        messages.error(request, "يجب تسجيل الدخول أولاً")
        return redirect('login')

    # =====================
    # بيانات البحث
    # =====================
    destination = request.session.get('destination')
    travel_date = request.session.get('travel_date')
    guests = request.session.get('guests')

    if request.method == 'POST':

        room_id = request.POST.get('room_id')
        check_in = request.POST.get('check_in')
        check_out = request.POST.get('check_out')

        f_name = request.POST.get('fName', '').strip()
        l_name = request.POST.get('lName', '').strip()
        nationality = request.POST.get('nationality', '').strip()
        phone = request.POST.get('phone', '').strip()

        bank_name = request.POST.get('bankName', '').strip()
        account_name = request.POST.get('accountName', '').strip()

        card_name = request.POST.get('cardName', '').strip()
        card_number = request.POST.get('cardNumber', '').strip()

        if not room_id or not check_in or not check_out:
            messages.error(request, "من فضلك املئي بيانات الفندق")
            return redirect('reservation')

        room = HotelRooms.objects.get(id=room_id)
        user = Users.objects.get(id=user_id)

        # =====================
        # Booking
        # =====================
        booking = Bookings.objects.create(
            id=str(uuid.uuid4()),
            user=user,
            booking_type='hotel',
            total_price=room.price_per_night,
            status='pending',
            confirmation_code=str(uuid.uuid4())[:8].upper(),
            notes=f"Destination: {destination}",
            created_at=timezone.now(),
            updated_at=timezone.now(),
        )

        # =====================
        # Hotel Booking
        # =====================
        HotelBookings.objects.create(
            id=str(uuid.uuid4()),
            booking=booking,
            room=room,
            check_in=check_in,
            check_out=check_out,
        )

        # =====================
        # Guest
        # =====================
        BookingGuests.objects.create(
            id=str(uuid.uuid4()),
            booking=booking,
            full_name=f"{f_name} {l_name}",
            nationality=nationality,
            person_type='adult',
            phone_encrypted=phone,
        )

        # =====================
        # Payment
        # =====================
        payment = Payments.objects.create(
            id=str(uuid.uuid4()),
            booking=booking,
            method='card' if card_number else 'bank',
            amount=room.price_per_night,
            status='pending',
            created_at=timezone.now(),
            updated_at=timezone.now(),
        )

        if card_number:
            CardPayments.objects.create(
                id=str(uuid.uuid4()),
                payment=payment,
                card_holder=card_name,
                last4=card_number[-4:],
            )

        elif bank_name:
            BankTransfers.objects.create(
                id=str(uuid.uuid4()),
                payment=payment,
                bank_name=bank_name,
                account_name=account_name,
                reference=str(uuid.uuid4())[:8].upper(),
            )

        # مسح session بعد الحجز
        request.session.pop('destination', None)
        request.session.pop('travel_date', None)
        request.session.pop('guests', None)

        messages.success(request, "تم حفظ الحجز بنجاح")
        return redirect('index')

    rooms = HotelRooms.objects.all()

    return render(request, 'reservation.html', {
        'rooms': rooms,
        'destination': destination,
        'travel_date': travel_date,
        'guests': guests
    })


def qaroon_view(request):
    return render(request, 'qaroon.html')


def tones_view(request):
    return render(request, 'tones.html')


def lahon_view(request):
    return render(request, 'lahon.html')


def rayan_view(request):
    return render(request, 'rayan.html')


def hetan_view(request):
    return render(request, 'hetan.html')


def hawara_view(request):
    return render(request, 'hawara.html')


def kranes_view(request):
    return render(request, 'kranes.html')


def madi_view(request):
    return render(request, 'madi.html')


def modwara_view(request):
    return render(request, 'modwara.html')


def komo_shen_view(request):
    return render(request, 'komo_shen.html')


def ganoby_view(request):
    return render(request, 'ganoby.html')


def shmaly_view(request):
    return render(request, 'shmaly.html')


def qawat_view(request):
    return render(request, 'qawat.html')


def haram_view(request):
    return render(request, 'haram.html')


def montagau_view(request):
    return render(request, 'montagau.html')

def swaqy_view(request):
    return render(request, 'swaqy.html')

def mash_view(request):
    return render(request, 'mash.html')
def profile_view(request):

    user_id = request.session.get('user_id')

    if not user_id:
        return redirect('login')

    try:
        user = Users.objects.get(id=user_id)
    except Users.DoesNotExist:
        request.session.flush()
        return redirect('login')

    profile, created = Profiles.objects.get_or_create(
        user=user,
        defaults={
            'id': str(uuid.uuid4()),
            'updated_at': timezone.now()
        }
    )

    if request.method == 'POST':

    # رفع الصورة فقط
        if request.FILES.get('image'):
            profile.image = request.FILES['image']
            profile.save()
            
            return redirect('profile')
        
        # بيانات المستخدم
        

        # بيانات البروفايل
        profile.nationality = request.POST.get('editNationality', '').strip()
        profile.preferred_language = request.POST.get('editLanguage', '').strip()
        profile.date_of_birth = request.POST.get('editBirth') or None
        profile.phone = request.POST.get('editPhone', '').strip()
        profile.country = request.POST.get('editCountry', '').strip()
        profile.city = request.POST.get('editCity', '').strip()
        profile.updated_at = timezone.now()

        profile.save()

        request.session['user_name'] = user.full_name

        return redirect('profile')

    return render(request, 'profile.html', {
        'user': user,
        'profile': profile,
    })

def logout_view(request):
    request.session.flush()
    return redirect('login')
def search_logic(request):
    destination = request.GET.get('destination')

    places = {
        "بحيرة قارون": "qaroon",
        "قرية تونس": "tones",
        "وادي الريان": "rayan",
        "وادي الحيتان": "hetan",
        "جبل المدورة": "modwara",
        "مدينة ماضي": "madi",
        "هرم هوارة": "hawara",
        "معبد كرانيس": "kranes",
        "متحف كوم اوشيم": "komo_shen",
        "السواقي": "swaqy",
        "البحيرة المسحورة": "mash",
        "هرم اللاهون": "lahon",
        "المعبد الشمالي": "shmaly",
        "المعبد الجنوبي": "ganoby",
    }
    

    if destination in places:
        return redirect(places[destination])

    return redirect('index')

def google_success(request):

    if request.user.is_authenticated:

        email = request.user.email

        try:
            user = Users.objects.get(email=email)

        except Users.DoesNotExist:

            user = Users.objects.create(
                
                full_name=request.user.get_full_name(),
                email=email,
                password_hash='',
                is_active=True,
                failed_logins=0,
                email_verified=True,
                created_at=timezone.now(),
                updated_at=timezone.now(),
            )

        request.session['user_id'] = str(user.id)
        request.session['user_name'] = user.full_name

    return redirect('index')
