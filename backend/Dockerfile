FROM --platform=linux/amd64 mcr.microsoft.com/dotnet/aspnet:7.0 AS base

ENV ASPNETCORE_URLS=http://+:3000

WORKDIR /app

EXPOSE 3000

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build

WORKDIR /src

COPY ["./Portfolio.Api/Portfolio.Api.csproj", "./Portfolio.Api/Portfolio.Api.csproj"]

RUN dotnet restore "./Portfolio.Api/Portfolio.Api.csproj"

COPY . .

WORKDIR "/src/."

RUN dotnet build "Portfolio.Api/Portfolio.Api.csproj" -c Release -o /app/build

FROM build AS publish

RUN dotnet publish "Portfolio.Api/Portfolio.Api.csproj" -c Release -o /app/publish

FROM base AS final

WORKDIR /app

COPY --from=publish /app/publish .

ENTRYPOINT ["dotnet", "Portfolio.Api.dll"]