FROM --platform=linux/amd64 mcr.microsoft.com/dotnet/aspnet:8.0 AS base

WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /src

COPY ["/app/app_stringSort/backend/api/api.csproj", "./app/app_stringSort/backend/api/api.csproj"]

RUN dotnet restore "./app/app_stringSort/backend/api/api.csproj"

COPY . .

COPY ../../backend/Portfolio.Core ./backend

WORKDIR "/src/."

RUN dotnet build "./app/app_stringSort/backend/api/api.csproj" -c Release -o /app/build

FROM build AS publish

RUN dotnet publish "./app/app_stringSort/backend/api/api.csproj" -c Release -o /app/publish

FROM base AS final

WORKDIR /app

COPY --from=publish /app/publish .

RUN apt-get update \
    && apt-get install -y curl

HEALTHCHECK --interval=5s --timeout=10s --retries=3 CMD curl --fail curl http://localhost:3004/healthcheck || exit 1

ENTRYPOINT ["dotnet", "api.dll"]