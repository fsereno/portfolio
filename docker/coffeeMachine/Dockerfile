FROM --platform=linux/amd64 mcr.microsoft.com/dotnet/aspnet:7.0 AS base

ENV ASPNETCORE_URLS=http://+:3001

WORKDIR /app

EXPOSE 3001

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build

WORKDIR /src

ENV APP_DIR="app_coffeeMachine"

COPY ["/app/${APP_DIR}/backend/api/api.csproj", "./app/${APP_DIR}/backend/api/api.csproj"]

RUN dotnet restore "./app/${APP_DIR}/backend/api/api.csproj"

COPY . .

COPY ../../backend/Portfolio.Core ./backend

WORKDIR "/src/."

RUN dotnet build "./app/${APP_DIR}/backend/api/api.csproj" -c Release -o /app/build

FROM build AS publish

RUN dotnet publish "./app/${APP_DIR}/backend/api/api.csproj" -c Release -o /app/publish

FROM base AS final

WORKDIR /app

COPY --from=publish /app/publish .

RUN apt-get update \
    && apt-get install -y curl

HEALTHCHECK --interval=5s --timeout=10s --retries=3 CMD curl --fail curl http://localhost:3001/healthcheck || exit 1

ENTRYPOINT ["dotnet", "api.dll"]