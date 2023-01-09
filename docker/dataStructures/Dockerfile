FROM --platform=linux/amd64 mcr.microsoft.com/dotnet/aspnet:7.0 AS base

ENV ASPNETCORE_URLS=http://+:3001

WORKDIR /app

EXPOSE 3000

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build

WORKDIR /src

COPY ["/app/app_dataStructures/backend/api/Portfolio.DataStructures.csproj", "./app/app_dataStructures/backend/api/Portfolio.DataStructures.csproj"]

RUN dotnet restore "./app/app_dataStructures/backend/api/Portfolio.DataStructures.csproj"

COPY . .

COPY ../../backend/Portfolio.Core ./backend

WORKDIR "/src/."

RUN dotnet build "./app/app_dataStructures/backend/api/Portfolio.DataStructures.csproj" -c Release -o /app/build

FROM build AS publish

RUN dotnet publish "./app/app_dataStructures/backend/api/Portfolio.DataStructures.csproj" -c Release -o /app/publish

FROM base AS final

WORKDIR /app

COPY --from=publish /app/publish .

ENTRYPOINT ["dotnet", "Portfolio.DataStructures.dll"]