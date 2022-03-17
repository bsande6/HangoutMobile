# Generated by Django 4.0.2 on 2022-03-13 23:22

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('hangout_app_friends', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
        model_name='friend_request',
        old_name='current_user',
        new_name='from_user',
        ),
        migrations.AlterField(
            model_name='friend_request',
            name='to_user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='to_user', to=settings.AUTH_USER_MODEL),
        ),
    ]
