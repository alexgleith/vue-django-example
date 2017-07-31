from __future__ import unicode_literals

import uuid
from django.db import models


# Create your models here.
class Todo(models.Model):
    text = models.CharField(max_length=200)
    id = models.UUIDField(
        default=uuid.uuid4, editable=False,
        unique=True, primary_key=True
    )

    def __str__(self):
        return "Todo: " + self.text
