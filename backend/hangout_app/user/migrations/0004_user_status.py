# Generated by Django 4.0.2 on 2022-03-15 18:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hangout_app_user', '0003_user_friends'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='status',
            field=models.BooleanField(default=False),
        ),
    ]
