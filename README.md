---
description: >-
  Порядок импорта контейнера ключей RSA для дешифрования данных, зашифрованных
  на билд-сервере
---

# Ипорт RSA ключей

На машине \(сервер или рабочая станция - не важно\), на которой должна быть возможность дешифрования данных с билд-сервера, сохраняем во временную папку файл

{% file src=".gitbook/assets/testfile.txt" caption="DHL\_EXP\_RU\_LOCAL\_APPS\_RSA\_KEY\_CONTAINER.xml" %}

В контексте этой временной папки выполняем из командной строки не под операторской, а под обычной учетной записью команду

```bash
C:\Windows\Microsoft.NET\Framework64\v4.0.30319\aspnet_regiis.exe -pi "DHL_EXP_RU_LOCAL_APPS_RSA_KEY_CONTAINER" DHL_EXP_RU_LOCAL_APPS_RSA_KEY_CONTAINER.xml
```

Если дешифрование будет осуществлять веб-приложение ASP.NET, пул которого запускается не под Local System, то пользователю, из под которого запускается пул, даём права на импортированный RSA Key Container, выполнив следующую команду

```bash
C:\Windows\Microsoft.NET\Framework64\v4.0.30319\aspnet_regiis.exe -pa "DHL_EXP_RU_LOCAL_APPS_RSA_KEY_CONTAINER" "{USER_NAME}"
```

{% hint style="info" %}
Если пул приложения запускается под Application Pool Identity, то в качестве {USER\_NAME} необходимо указать IIS APPPOOL{APPLICATION\_POOL\_NAME}, где {APPLICATION\_POOL\_NAME} - имя пула приложений.
{% endhint %}

```bash
C:\Windows\Microsoft.NET\Framework64\v4.0.30319\aspnet_regiis.exe -pa "DHL_EXP_RU_LOCAL_APPS_RSA_KEY_CONTAINER" "IIS AppPool\ROS2"
```

{% hint style="info" %}
Если приложение запускается под встроенной учётной записью Local Service, то в качестве {USER\_NAME} необходимо указать NT AUTHORITY\LocalService, а если приложение запускается под встроенной учётной записью Network Service, то NT AUTHORITY\NetworkService.
{% endhint %}

```bash
C:\Windows\Microsoft.NET\Framework64\v4.0.30319\aspnet_regiis.exe -pa "DHL_EXP_RU_LOCAL_APPS_RSA_KEY_CONTAINER" "NT AUTHORITY\LocalService"
```

```bash
C:\Windows\Microsoft.NET\Framework64\v4.0.30319\aspnet_regiis.exe -pa "DHL_EXP_RU_LOCAL_APPS_RSA_KEY_CONTAINER" "NT AUTHORITY\NetworkService"
```

{% hint style="info" %}
Если же пул приложения запускается под конкретным пользователем, то в качестве {USER\_NAME} необходимо указать полное имя пользователя \(включая домен, если применимо\)
{% endhint %}

```bash
C:\Windows\Microsoft.NET\Framework64\v4.0.30319\aspnet_regiis.exe -pa "DHL_EXP_RU_LOCAL_APPS_RSA_KEY_CONTAINER" "PRG-DC\srv_ru-ldpreader"
```

Удаляем файл **DHL\_EXP\_RU\_LOCAL\_APPS\_RSA\_KEY\_CONTAINER.xml** из временной папки и, если необходимо, удаляем также саму временную папку.

