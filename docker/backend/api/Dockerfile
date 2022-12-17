FROM --platform=linux/amd64 mcr.microsoft.com/dotnet/aspnet:7.0 AS base

WORKDIR /app

EXPOSE 3000

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build

WORKDIR /src

COPY ["../../../../backend/api/api.csproj", "./"]

RUN dotnet restore "api.csproj"

COPY . .

WORKDIR "/src/."

RUN dotnet build "api.csproj" -c Release -o /app/build

FROM build AS publish

RUN dotnet publish "api.csproj" -c Release -o /app/publish

FROM base AS final

WORKDIR /app

COPY --from=publish /app/publish .

ENTRYPOINT ["dotnet", "api.dll"]