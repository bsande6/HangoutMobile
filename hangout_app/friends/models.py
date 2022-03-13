from django.db import models
from hangout_app.user.models import User

class Friend_Request(models.Model):
    current_user = models.ForeignKey(User, related_name="current_user", on_delete=models.CASCADE)
    to_user = models.ForeignKey(User, related_name="to_user", on_delete=models.CASCADE)

    # @classmethod
    # def make_friend(cls, current_user, new_friend):
    #     friend, created = cls.objects.get_or_create(
    #         current_user = current_user
    #     )
    #     friend.friends.add(new_friend)

    # @classmethod
    # def remove_friend(cls, current_user, new_friend):
    #     friend, created = cls.objects.get_or_create(
    #         current_user = current_user
    #     )
    #     friend.friends.remove(new_friend)

    # def __str__(self):
    #     return str(self.current_user)