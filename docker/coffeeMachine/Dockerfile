FROM --platform=linux/amd64 mcr.microsoft.com/dotnet/aspnet:7.0 AS base

ENV ASPNETCORE_URLS=http://+:3001

WORKDIR /app

EXPOSE 3000

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build

WORKDIR /src

COPY ["/app/app_coffeeMachine/backend/api/Portfolio.CoffeeMachine.csproj", "./app/app_coffeeMachine/backend/api/Portfolio.CoffeeMachine.csproj"]

RUN dotnet restore "./app/app_coffeeMachine/backend/api/Portfolio.CoffeeMachine.csproj"

COPY . .

COPY ../../backend/Portfolio.Core ./backend

WORKDIR "/src/."

RUN dotnet build "./app/app_coffeeMachine/backend/api/Portfolio.CoffeeMachine.csproj" -c Release -o /app/build

FROM build AS publish

RUN dotnet publish "./app/app_coffeeMachine/backend/api/Portfolio.CoffeeMachine.csproj" -c Release -o /app/publish

FROM base AS final

WORKDIR /app

COPY --from=publish /app/publish .

ENTRYPOINT ["dotnet", "Portfolio.CoffeeMachine.dll"]