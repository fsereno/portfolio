using Portfolio.Core.Services;
using Portfolio.CoffeeMachine.Interfaces;
using Portfolio.CoffeeMachine.Utils;

var builder = WebApplication.CreateBuilder(args);

builder.WebHost.UseUrls("http://*:3000");

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddTransient<TestService, TestService>();

// CoffeeMachine
builder.Services.AddScoped<ITaskRunner, CoffeeMakerUtil>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
